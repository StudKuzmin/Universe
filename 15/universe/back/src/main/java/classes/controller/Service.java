package classes.controller;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;

import jakarta.inject.Inject;

import classes.model.Model;
import classes.controller.Users;
import classes.model.interfaceModel.IModel;

import java.util.ArrayList;
import java.util.List;

import java.util.*;
import java.net.*;
import java.sql.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import java.io.IOException;

import com.google.gson.*;

//@Provider
//class RestResponseFilter implements ContainerResponseFilter {

//@Override
//	public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) throws IOException {
//		responseContext.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
//		responseContext.getHeaders().putSingle("Access-Control-Allow-Credentials", "true");
//		responseContext.getHeaders().putSingle("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//		responseContext.getHeaders().putSingle("Access-Control-Allow-Headers", "Content-Type, Accept, Token");
//	}
//}

@Path("/")
public class Service {
//	@Inject
//	IModel model;
	private IModel model = null;

	@POST
	@Path("/regData")
	@Consumes("application/json")
	@Produces("application/json")
	public Response regData(String userDataJSON) throws Exception {
		Boolean data_added = false;

		try {
			model = new Model();

			// Данные успешно добавлены
			data_added = model.doReg(userDataJSON);
			if (data_added) {
				return Response.ok(true).build();
			}
			return Response.ok(false).build();

		} catch (Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
		}

	}

	@POST
	@Path("/logData")
	@Consumes("application/json")
	@Produces("application/json")
	public Response logData(/*@HeaderParam("Authentication") String st,*/ String userDataJSON)
	{
		String token;
		Boolean data_is_ok = false;

		try
		{
			model = new Model();

			// Данные совпали
			data_is_ok = model.doLog(userDataJSON);
			if (data_is_ok) {
				token = model.generateToken();
				return Response.ok(token).build();
			}
			return Response.ok(false).build();
		}
		catch (Exception e) { return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build(); }
	}
}