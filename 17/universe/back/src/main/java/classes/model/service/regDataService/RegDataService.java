package classes.model.service.regDataService;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Connection;

import classes.model.service.regDataService.interfaceRegDataService.IRegDataService;

public class RegDataService implements IRegDataService {

    @Override
    public Boolean addData(String login, String password, Connection con)
    {
        try
        {
            Statement stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, /*ResultSet.CONCUR_READ_ONLY,*/ ResultSet.CONCUR_UPDATABLE);
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            String query = "INSERT INTO users(login, password) VALUES (?,?)";
            PreparedStatement statement = con.prepareStatement(query);
            statement.setString(1, login);
            statement.setString(2, password);
            statement.execute();

            rs.close();
            stmt.close();
        }
        catch (Exception e) {
            System.out.println("ERROR in class RegDataService addData(): " + e);
            return false;
        }
        return true;
    }
}
