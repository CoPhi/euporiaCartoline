<%-- 
    Document   : dbmanager
    Created on : Oct 21, 2015, 1:18:07 AM
    Author     : federico.boschetti@ilc.cnr.it
--%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@page contentType="text/plain" pageEncoding="UTF-8"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" import="java.util.*" %>
<%@ page import = "java.util.ResourceBundle" %>

<!DOCTYPE html>
<% ResourceBundle resource = ResourceBundle.getBundle("config");
  String login=resource.getString("login");
  String password=resource.getString("password"); %>
<% 
    BufferedReader br=request.getReader();
    StringBuilder sb=new StringBuilder();
    String target=br.readLine().substring(2);
    String line;
    String text;
    while((line=br.readLine())!=null){
        sb.append(line);
    }
    text=sb.toString();
    text=text.replaceAll("><","> <");
    text=text.replaceAll("'","’");
    Class.forName("com.mysql.jdbc.Driver");
    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/cartoline?useUnicode=true&characterEncoding=utf-8&user="+login+"&password="+password);    
    con.setAutoCommit(false);
    PreparedStatement stmt = con.prepareStatement("UPDATE annotations SET annotation_content=? WHERE annotation_id=?");
    stmt.setString(1, text);
    stmt.setString(2, target);
    stmt.executeUpdate();
    con.commit();
    stmt.close();
    con.close();
%>
Saved
