package controller;

public class Users {
    private String login;
    private String password;

    public Users(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return this.login;
    }
    public String getPassword() {
        return this.password;
    }
}