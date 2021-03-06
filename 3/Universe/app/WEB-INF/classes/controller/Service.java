package controller;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.ext.Provider;

import jakarta.inject.Inject;

import model.Model;

import java.util.ArrayList;
import java.util.List;

import java.util.*;
import java.net.*;
import java.sql.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import com.google.gson.*;

@Path("/")
public class Service {
	
	// @Inject
	// IModel model;
	 
	@POST
	@Path("/regData")
	@Consumes("application/json")
	@Produces("application/json")
	public Response regData(String userDataJSON) 
	{    
		Gson gson = new Gson();
		String resultJSON;
		Users user = null;
		Model model;
		Boolean data_added;

		try 
		{  
			model = new Model();
			try 
			{ 
				user = gson.fromJson(userDataJSON, Users.class);                   
			} catch (Exception e) { throw new Exception("Error while JSON transforming."); }
			
			// Данные успешно добавлены
			data_added = model.addData(user.getLogin(), user.getPassword());
			if (data_added)
				return Response.ok(true).build(); 
		}
		catch (Exception e) { return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build(); } 

		return Response.ok(false).build(); 
	}



	@POST   
	@Path("/logData")
	@Consumes("application/json")
	@Produces("application/json")
	public Response logData(/*@HeaderParam("Authentication") String st,*/ String userDataJSON) 
	{    
		Gson gson = new Gson();
		String resultJSON;
		Users user = null;
		Model model;
		Boolean data_is_ok;
		String token;

		try 
		{  
			model = new Model();
			try 
			{ 
				user = gson.fromJson(userDataJSON, Users.class);                   
			} catch (Exception e) { throw new Exception("Error while JSON transforming."); }

			// Данные совпали
			data_is_ok = model.checkData(user.getLogin(), user.getPassword());
			if (data_is_ok) {
				token = model.generateToken(user);

				return Response.ok(token).build(); 
			}
			return Response.ok(false).build(); 
		}
		catch (Exception e) { return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build(); }  
	}

	@GET   
	@Path("/getSearchResult")
	@Consumes("application/json")
	@Produces("application/json")
	public Response getSearchResult(@HeaderParam("Authentication") String token) 
	{    
		Gson gson = new Gson();
		String resultJSON;
		Users user = null;
		Model model;
		Boolean token_is_good;
		try 
		{  
			model = new Model();
			token_is_good = model.checkToken(token);
			// if (this.token.equals(token))
			// {
			// 	return Response.ok(true).build(); 
			// }
			// model = new Model();
			// try 
			// { 
			// 	user = gson.fromJson(userDataJSON, Users.class);                   
			// } catch (Exception e) { throw new Exception("Error while JSON transforming."); }
			
			// // Данные успешно добавлены
			// data_added = model.addData(user.getLogin(), user.getPassword());
			// if (data_added)
			// 	return Response.ok(true).build(); 
		}
		catch (Exception e) { return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build(); } 
		 
		return Response.ok(token_is_good).build(); 
	}
}