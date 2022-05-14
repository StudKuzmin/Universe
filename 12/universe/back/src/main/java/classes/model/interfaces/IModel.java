package model.interfaces;

public interface IModel{
    Boolean addData(String login, String password);
    Boolean checkData(String login, String password);
    String generateToken(controller.Users user);
    Boolean checkToken(String token);
}