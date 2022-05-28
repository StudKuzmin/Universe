package classes.model.service.regDataService.interfaceRegDataService;

import java.sql.Connection;

public interface IRegDataService {
    public Boolean addData(String login, String password, Connection con);
}
