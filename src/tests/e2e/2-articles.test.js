import app from "../../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";
import { send } from "express/lib/response";

chai.use(chaiHttp);

let visitoToken = "";
let adminToken = "";
let id;

describe("ARTIClLES MANAGEMENT", () => {
	before(() => {
		mongoose.connection.dropCollection("articles");
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
	it("should create an article", (done) => {
		const articleToCreate = {
			title: "computer ethics",
			content:
				"A Workflow is a sequence of tasks that  every kind of business and industry. a workflow is created. Workflows are the paths",
			author: "harerimana jonathan",
		};
		chai
			.request(app)
			.post("/api/articles")
			.set("token", adminToken)
			.send(articleToCreate)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Article created successfully");
				expect(res.status).to.be.equal(201);
				id = res.body.data.article._id;
				done();
			});
	});

	it("SHOULD FETCH ALL ARTICLES", (done) => {
		chai
			.request(app)
			.get("/api/articles")
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				expect(res.body.message).to.be.equal("Articles fetched successfully");
				done();
			});
	});

	it("should fetch one article", (done) => {
		chai
			.request(app)
			.get(`/api/articles/${id}`)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Article was not found");
				done();
			});
	});
	it("should fail to get an unexisting article", (done) => {
		chai
			.request(app)
			.get("/api/articles/622b718db4b980f0eab1iuiu")
			.end((err, res) => {
				expect(res.body.message).to.be.equal("message is this");
				expect(res.status).to.be.equal(404);
				done();
			});
	});
	it("update an article", (done) => {
		chai
			.request(app)
			.put(`/api/articles/${id}`)
			.set("token", adminToken)
			.send({
				author: "usengimana",
				title: "money gream",
				content:
					"ajdnjaasd fasdfnajdf nsndfjasdf djfasfd A Workflow is a sequence of tasks that  every kind of business and industry. a workflow is created. Workflows are the paths",
			})
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				done();
			});
	});

	it("should comment on an article", (done) => {
		const commentToCreate = {
			comment: " this is a good article i ever read",
			name: "bigirimana",
		};
		chai
			.request(app)
			.put(`/api/articles/${id}/comment`)
			.set("token", adminToken)
			.send(commentToCreate)
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				done();
			});
	});
	it("should fail to comment on an article", (done) => {
		const commentToCreate = {
			comment: " this is a good article i ever read",
			name: "bigirimana",
		};
		chai
			.request(app)
			.put("/api/articles/354345fhfgvgvhr6h55/comment")
			.set("token", adminToken)
			.send(commentToCreate)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("aanfklnknncklk");
				expect(res.status).to.be.equal(500);
				done();
			});
	});
	it("should delete an article", (done) => {
		chai
			.request(app)
			.delete(`/api/articles/${id}`)
			.set("token", adminToken)
			.end((err, res) => {
				expect(res.body.message).to.be.equal("Article deleted successfully");
				expect(res.status).to.be.equal(200);
				done();
			});
	});
});
