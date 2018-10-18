<%-- 
    Document   : logout
    Created on : Oct 17, 2018, 2:48:35 PM
    Author     : federico
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
session.invalidate();
response.sendRedirect(request.getContextPath());
%>