package classes.model.service.logDataService.interfaceLogDataService;

import java.sql.Connection;

public interface ILogDataService {
    public Boolean checkData(String login, String password, Connection con);
}
