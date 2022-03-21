import app from "../../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";
import { before, beforeEach } from "mocha";

chai.use(chaiHttp);

let visitoToken = "";
let adminToken = "";
let id;

describe("SUBSCRIBERS TESTING", () => {
	before(() => {
		mongoose.connection.dropCollection("subscribers");
	});
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
	it("should subscribe a person", (done) => {
		const subscribeUser = {
			name: "king david",
			email: "david@gmail.com",
		};
		chai
			.request(app)
			.post("/api/subscription/subscribe")
			.send(subscribeUser)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Subscription added successfully");
				expect(res.status).to.be.equal(200);
				done();
			});
	});
	it("should fail unsubscribe a person", (done) => {
		chai
			.request(app)
			.delete("/api/subscription/unsubscribe")
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("subsciber was not found");
				expect(res.status).to.be.equal(404);
				done();
			});
	});
});
