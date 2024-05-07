import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PlacemarkSpec, PlacemarkSpecPlus, PlacemarkArraySpec, categorySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";
import { decodeToken, validate } from "./jwt-utils.js";
// import jwt from "jsonwebtoken";

export const placemarkApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const decodedToken = decodeToken(request.headers.authorization);
        console.log("decodedToken")
        console.log(decodedToken)
        const validationResult = await validate(decodedToken, request);
        console.log("validationResult")
        console.log(validationResult)
        if (!validationResult.isValid) {
          return Boom.unauthorized("Invalid credentials");
        }
        const userId = decodedToken.userId;
        console.log("userId")
        console.log(userId)
        const placemarks = await db.placemarkStore.getUserPlacemarks(userId);
        return placemarks;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: PlacemarkArraySpec, failAction: validationError },
    description: "Get all placemarkApi",
    notes: "Returns all placemarkApi",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    async handler(request) {
      try {
        const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
        if (!placemark) {
          return Boom.notFound("No placemark with this id");
        }
        return placemark;
      } catch (err) {
        return Boom.serverUnavailable("No placemark with this id");
      }
    },
    tags: ["api"],
    description: "Find a Placemark",
    notes: "Returns a placemark",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PlacemarkSpecPlus, failAction: validationError },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const decodedToken = decodeToken(request.headers.authorization);
        const validationResult = await validate(decodedToken, request);
        if (!validationResult.isValid) {
          return Boom.unauthorized("Invalid credentials");
        }
        // access user ID from decoded payload
        // eslint-disable-next-line prefer-destructuring
        const userId = decodedToken.userId;
        // access new placemark data from request payload
        const newPlacemark = request.payload;
        // add userId to the new placemark data
        newPlacemark.userId = userId;
        // proceed with placemark creation using the retrieved user id
        // const result = await db.placemarkStore.addPlacemark(userId, newPlacemark);
        const placemark = await db.placemarkStore.addPlacemark(userId, newPlacemark);
        if (placemark) {
          return h.response(placemark).code(201);
        }
        return Boom.badImplementation("error creating placemark");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a Placemark",
    notes: "Returns the newly created placemark",
    validate: { payload: PlacemarkSpec },
    response: { schema: PlacemarkSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.placemarkStore.deleteAllPlacemarks();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all placemarkApi",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
        if (!placemark) {
          return Boom.notFound("No Placemark with this id");
        }
        await db.placemarkStore.deletePlacemark(placemark._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Placemark with this id");
      }
    },
  },
  tags: ["api"],
  description: "Delete a placemark",
  validate: { params: { id: IdSpec }, failAction: validationError },
  
  
  
  update: {
  auth: {
    strategy: "jwt",
  },
  handler: async function (request, h) {
    try {
      // decode and validate the JWT token
      const decodedToken = decodeToken(request.headers.authorization);
      console.log("decodedToken")
      console.log(decodedToken)
      const validationResult = await validate(decodedToken, request);
      console.log("validationResult")
      console.log(validationResult)
      if (!validationResult.isValid) {
        return Boom.unauthorized("Invalid credentials");
      }
      const userId = decodedToken.userId;
      console.log("userId")
      console.log(userId)
      const updatedPlacemark = request.payload;
      updatedPlacemark.userId = userId;
      console.log("updatedPlacemark")
      console.log(updatedPlacemark)
      const placemarkId = request.params.id;
      console.log("placemarkId")
      console.log(placemarkId)
      const result = await db.placemarkStore.updatePlacemark(placemarkId, updatedPlacemark);
      console.log("result")
      console.log(result)
      if (result) {
        const resultObject = result.toObject();
        return h.response(resultObject).code(200);
      }
      return Boom.badImplementation("Error updating placemark");

    } catch (error) {
      return Boom.badImplementation("Error updating placemark");
    }
  },
  tags: ["api"],
  description: "Update a Placemark",
  notes: "Updates an existing placemark",
  validate: {
    params: { id: IdSpec },
    payload: PlacemarkSpec
  },
  response: { emptyStatusCode: 204, failAction: validationError },
},
  
  
  
  
  
  
  filterCategory: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const decodedToken = decodeToken(request.headers.authorization);
        console.log("decodedToken")
        console.log(decodedToken)
        const validationResult = await validate(decodedToken, request);
        console.log("validationResult")
        console.log(validationResult)
        if (!validationResult.isValid) {
          return Boom.unauthorized("Invalid credentials");
        }
        const userId = decodedToken.userId;
        console.log("userId")
        console.log(userId)
        const placemarks = await db.placemarkStore.getPlacemarksByCategory(userId, request.params.category);
        return placemarks;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: PlacemarkArraySpec, failAction: validationError },
    validate: {
      params: categorySpec 
  },
    description: "Get all placemarkApi for category",
    notes: "Returns all placemarkApi for category",
  },
  
  
  
};