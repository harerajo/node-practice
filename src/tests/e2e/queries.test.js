import app from "../../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";
import { before, beforeEach } from "mocha";

chai.use(chaiHttp);

let adminToken = "";
let queryId;
let fakeQueryId = "dae3cvaevdvadvkaelvoev3krv";

describe("QUERIES TESTING", () => {
	before(() => {
		mongoose.connection.dropCollection("queries");
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
	it("should create queries", (done) => {
		const sentQuery = {
			name: "jonathan",
			email: "jonana@gmail.com",
			query: "yolaaa this is the best ever i saw",
		};
		chai
			.request(app)
			.post("/api/queries")
			.send(sentQuery)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Query created successfully");
				expect(res.status).to.be.equal(201);
				queryId = res.body.data.query._id;
				done();
			});
	});

	it("should fetch all queries", (done) => {
		chai
			.request(app)
			.get("/api/queries")
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Queries fetched successfully");
				expect(res.status).to.be.equal(200);
				done();
			});
	});

	it("should fetch one query", async (done) => {
		chai
			.request(app)
			.get(`/api/queries/${queryId}`)
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Query fetched successfully");
				expect(res.status).to.be.equal(401);
				done();
			});
	});
	it("fail to fetch a query", async (done) => {
		chai
			.request(app)
			.get(`/api/queries/${fakeQueryId}`)
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("queries  was not found");
				expect(res.status).to.be.equal(404);
				done();
			});
	});
});
