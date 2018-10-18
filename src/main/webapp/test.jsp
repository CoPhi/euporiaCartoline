<%@ page language="java" import="java.util.*" %> 
<%@ page import = "java.util.ResourceBundle" %>

<!DOCTYPE html>
<% ResourceBundle resource = ResourceBundle.getBundle("config");
  String login=resource.getString("login");
  String password=resource.getString("password"); %>


<%-- 
    Document   : test
    Created on : Oct 18, 2018, 4:58:43 PM
    Author     : federico
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
          <%=login %>
          <%=password %>
    </body>
</html>
