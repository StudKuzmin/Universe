package classes.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import java.util.*;
import java.net.*;
import java.sql.*;

import classes.controller.Users;
import classes.model.interfaceModel.IModel;
import classes.model.service.logDataService.LogDataService;
import classes.model.service.logDataService.interfaceLogDataService.ILogDataService;
import classes.model.service.regDataService.RegDataService;
import classes.model.service.regDataService.interfaceRegDataService.IRegDataService;

//////
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.google.gson.Gson;

public class Model implements IModel
{
	private Gson gson = new Gson();
	private Users user = null;

	private Statement stmt;
	private ResultSet rs;
	private PreparedStatement statement;
	private Connection con;

	private String secret = "!@cer";
	private Algorithm algorithm = Algorithm.HMAC256(secret);

	public Model()
	{
		try 
		{

			String url = "jdbc:mysql://localhost/test?serverTimezone=Europe/Moscow&useSSL=false";
			String username = "Kuzmin";
			String password = "trewolfol123";
			Class.forName("com.mysql.cj.jdbc.Driver").getDeclaredConstructor().newInstance();
			con = DriverManager.getConnection(url, username, password);	
			
		} catch (Exception ex) { System.out.println(ex); }
						
	}

	public Boolean doReg(String userDataJSON){
		IRegDataService regDataService = new RegDataService();

		try { user = gson.fromJson(userDataJSON, Users.class); }
		catch (Exception e) {
			System.out.println("ERROR in class Model doReg().");
			return false;
		}

		if(regDataService.addData(user.getLogin(), user.getPassword(), con))
			return true;
		return false;
	}

	public Boolean doLog(String userDataJSON) {
		ILogDataService logDataService = new LogDataService();

		try { user = gson.fromJson(userDataJSON, Users.class); }
		catch (Exception e) {
			System.out.println("Error while JSON transforming.");
			return false;
		}

		if (logDataService.checkData(user.getLogin(), user.getPassword(), con))
			return true;

		return false;
	}

	public String generateToken(){
		String token = null;

		try {

        	token = JWT.create()
				.withIssuer("JWT")
                .withClaim("login", user.getLogin())
                .withClaim("password", user.getPassword())
				.withExpiresAt(new java.util.Date(new java.util.Date().getTime() + 86400000)) // 1 day
                .sign(algorithm);

		} catch (Exception ex) { System.out.println("ERROR in generateToken in Model"); }

		return token;
	}
//
//
//
//	public Boolean checkToken(String token){
//		try {
//			JWTVerifier verifier = JWT.require(algorithm)
//                    .withIssuer("JWT")
//                    .build();
//
//        	DecodedJWT decodedJWT = verifier.verify(token);
//			return true;
//
//		} catch (Exception ex) { System.out.println("ERROR in checkToken in Model" + ex); }
//		return false;
//	}

}