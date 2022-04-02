package model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import java.util.*;
import java.net.*;
import java.sql.*;

import controller.Users;

//////
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

public class Model
{    
	Statement stmt;               						
	ResultSet rs;	
	PreparedStatement statement;
	Connection con;
	String secret = "!@cer";
	Algorithm algorithm = Algorithm.HMAC256(secret);

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
	public Boolean addData(String login, String password)
	{
		try 
		{
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, /*ResultSet.CONCUR_READ_ONLY,*/ ResultSet.CONCUR_UPDATABLE);  
			rs = stmt.executeQuery("SELECT * FROM users");	

			String query = "INSERT INTO users(login, password) VALUES (?,?)";
			statement = con.prepareStatement(query);
			statement.setString(1, login);
			statement.setString(2, password);
			statement.execute();

		} catch (Exception e) { System.out.println("ERROR in class MODEL: " + e); return false; }
		return true;
	}

	public Boolean checkData(String login, String password) {
		try 
		{
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, /*ResultSet.CONCUR_READ_ONLY,*/ ResultSet.CONCUR_UPDATABLE);  
			rs = stmt.executeQuery("SELECT * FROM users");

			while(rs.next())
			{
				if (rs.getString("login").equals(login) && rs.getString("password").equals(password))
					return true;
			}
		} catch (Exception e) { System.out.println("ERROR in class MODEL: " + e); return false; }
		return false;
	}

	public String generateToken(Users user){
		String token = "NONE";

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

	public Boolean checkToken(String token){
		try {
			JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("JWT")
                    .build();

        	DecodedJWT decodedJWT = verifier.verify(token);
			return true;

		} catch (Exception ex) { System.out.println("ERROR in checkToken in Model" + ex); }
		return false;
	}
	
	public void finalize()
	{
		try
		{
			rs.close();
			stmt.close();
		} catch (Exception e) { System.out.println(e); }
	}		
}