package classes.model.service.logDataService;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

import classes.model.service.logDataService.interfaceLogDataService.ILogDataService;


public class LogDataService implements ILogDataService {
    public Boolean checkData(String login, String password, Connection con) {
        try
        {
            Statement stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, /*ResultSet.CONCUR_READ_ONLY,*/ ResultSet.CONCUR_UPDATABLE);
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            while(rs.next())
            {
                if (rs.getString("login").equals(login) && rs.getString("password").equals(password))
                    return true;
            }

            rs.close();
            stmt.close();
        }
        catch (Exception e) {
            System.out.println("ERROR in class MODEL: " + e);
            return false;
        }
        return false;
    }
}
