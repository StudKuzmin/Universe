javac app\WEB-INF\classes\controller\Config.java 		    -classpath "C:\Users\ahgin\Desktop\openJDK\jdk-17.0.2\bin;.\app\WEB-INF\classes;D:\glassfish6\glassfish\lib\javaee.jar;C:\Users\ahgin\Desktop\mySql_Drivers\mysql-connector-java-8.0.25.jar;C:\Users\ahgin\Desktop\JAVA_src\GSON_HOME\gson-2.8.9.jar;C:\Users\ahgin\Desktop\JAVA_src\java-jwt-3.3.0.jar"
javac app\WEB-INF\classes\controller\Service.java 		    -classpath "C:\Users\ahgin\Desktop\openJDK\jdk-17.0.2\bin;.\app\WEB-INF\classes;D:\glassfish6\glassfish\lib\javaee.jar;C:\Users\ahgin\Desktop\mySql_Drivers\mysql-connector-java-8.0.25.jar;C:\Users\ahgin\Desktop\JAVA_src\GSON_HOME\gson-2.8.9.jar;C:\Users\ahgin\Desktop\JAVA_src\java-jwt-3.3.0.jar"
javac app\WEB-INF\classes\controller\Users.java 		    -classpath "C:\Users\ahgin\Desktop\openJDK\jdk-17.0.2\bin;.\app\WEB-INF\classes;D:\glassfish6\glassfish\lib\javaee.jar;C:\Users\ahgin\Desktop\mySql_Drivers\mysql-connector-java-8.0.25.jar;C:\Users\ahgin\Desktop\JAVA_src\GSON_HOME\gson-2.8.9.jar;C:\Users\ahgin\Desktop\JAVA_src\java-jwt-3.3.0.jar"

javac app\WEB-INF\classes\model\interfaces\IModel.java 			-classpath "C:\Users\ahgin\Desktop\openJDK\jdk-17.0.2\bin;.\app\WEB-INF\classes;D:\glassfish6\glassfish\lib\javaee.jar;C:\Users\ahgin\Desktop\mySql_Drivers\mysql-connector-java-8.0.25.jar;C:\Users\ahgin\Desktop\JAVA_src\GSON_HOME\gson-2.8.9.jar;C:\Users\ahgin\Desktop\JAVA_src\java-jwt-3.3.0.jar"

javac app\WEB-INF\classes\model\Model.java 			    -classpath "C:\Users\ahgin\Desktop\openJDK\jdk-17.0.2\bin;.\app\WEB-INF\classes;D:\glassfish6\glassfish\lib\javaee.jar;C:\Users\ahgin\Desktop\mySql_Drivers\mysql-connector-java-8.0.25.jar;C:\Users\ahgin\Desktop\JAVA_src\GSON_HOME\gson-2.8.9.jar;C:\Users\ahgin\Desktop\JAVA_src\java-jwt-3.3.0.jar"


cd app
start WinRAR A -r -f "appl.war"
cd ..

TIMEOUT 3

copy /Y app\appl.war D:\glassfish6\glassfish\domains\domain1\autodeploy\appl.war

echo '################################################'






