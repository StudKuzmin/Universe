package classes.model.interfaceModel;


public interface IModel{
    public Boolean doReg(String userDataJSON);
    public Boolean doLog(String userDataJSON);
    public String generateToken();
}