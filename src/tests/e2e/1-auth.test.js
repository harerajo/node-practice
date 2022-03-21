import app from "../../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";
import { before, beforeEach } from "mocha";

chai.use(chaiHttp);

let visitoToken = "";
let adminToken = "";

describe("USER AUTHENTICATION TESTS", () => {
	before((done) => {
		mongoose.connection.dropCollection("users");

		done();
	});

	//SIGNUP TESTS
	it("Should signup a user", async () => {
		const userToRegister = {
			email: "david@gmail.com",
			password: "12345",
			name: "David",
			role: "admin",
		};
		let res = await chai
			.request(app)
			.post("/api/auth/signup")
			.send(userToRegister);
		expect(res.status).to.be.equal(201);

	});
	// LOGIN TESTS
	it("Should login a user", (done) => {
		const user = { email: "david@gmail.com", password: "12345" };
		chai
			.request(app)
			.post("/api/auth/login")
			.send(user)
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				expect(res.body.message).to.be.equal("User logged in successfully");
				adminToken = res.body.data.token;
				done();
			});
	});
	it("Should not login a user with wrong password", (done) => {
		const user = { email: "david@gmail.com", password: "abcde" };
		chai
			.request(app)
			.post("/api/auth/login")
			.send(user)
			.end((err, res) => {
				expect(res.status).to.be.equal(401);
				expect(res.body.message).to.be.equal("Email or password is incorrect");
				done();
			});
	});

	// PROFILE TESTS
	it("Should update profile", (done) => {
		const updatableUser = {
			experience: "teaching for three years",
			skills: "project management",
		};
		chai
			.request(app)
			.put("/api/auth/profile")
			.set("token", adminToken)
			.send(updatableUser)
			.end((err, res) => {
				expect(res.body.message).to.equal("User updated successfully");
				done();
			});
	});

	it("Should get user profile", (done) => {
		chai
			.request(app)
			.get("/api/auth/profile")
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				expect(res.body.message).to.be.equal("User found succesfully");
				done();
			});
	});

	// USERS TESTS
	it("Should get all users", (done) => {
		chai
			.request(app)
			.get("/api/auth/all-users")
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				expect(res.body.message).to.be.equal("Users fetched successfully");
				done();
			});
	});
});
