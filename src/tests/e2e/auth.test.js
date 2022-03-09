import app from "../../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";

chai.use(chaiHttp);

describe("USER AUTHENTICATION TESTS", () => {
	before(() => {
		mongoose.connection.dropCollection("users");
	});
	it("Should signup a user", (done) => {
		const userToRegister = {
			email: "david@gmail.com",
			password: "12345",
			name: "David",
			role: "admin",
		};
		chai
			.request(app)
			.post("/api/auth/signup")
			.send(userToRegister)
			.end((err, res) => {
				expect(res.status).to.be.equal(201);
				done();
			});
	});
	it("Should login a user", (done) => {
		chai
			.request(app)
			.post("/api/auth/login")
			.send({ email: "david@gmail.com", password: "12345" })
			.end((err, res) => {
				console.log(res.body);
				expect(res.body.status).to.be.equal(200);
				done();
			});
	});
	it("Should fail password did not match", (done) => {
		chai
			.request(app)
			.post("/api/auth/login")
			.send({ email: "david@gmail.com", password: "abcxdasdfgwert" })
			.end((err, res) => {
				console.log(res.body);
				expect(res.body.message).to.be.equal("Email or password is incorrect");
				done();
			});
	});
});
