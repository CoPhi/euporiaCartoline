<%-- 
    Document   : index
    Created on : Oct 18, 2018, 16:48:00 AM
    Author     : federico.boschetti@ilc.cnr.it
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<sql:query var="objects" dataSource="jdbc/cartoline">
    select * from objects inner join assignments on objects.object_id=assignments.object_id where user_x_role='${pageContext.request.remoteUser}_as_editor';
</sql:query>

<c:set var="object_id" value="${param.object_id}"/>
<c:if test="${object_id==null}"><c:set var="object_id" value="${objects.rows[0].object_id}"/></c:if>
<sql:query var="rs" dataSource="jdbc/cartoline">
    select * from parts left join contents on parts.part_id=contents.item_id left join metadata on parts.object_id=metadata.object_id left join annotations on parts.part_id=annotations.annotation_id where parts.object_id='${object_id}' order by annotations.annotation_id;
</sql:query>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8"/>
    <title>doc</title>
    <link rel="stylesheet" href="css/euporia.css" type="text/css"/>
    <script src="js/vkbeautify.0.99.00.beta.js" type="text/javascript"></script>
    <script type="text/javascript">
        var target;
        var xhttp = new XMLHttpRequest();
        var editp=false;
        function encode(text){
            text=text.replace(/</g,'≺');
            text=text.replace(/>/g,'≻');
            text=text.replace(/&/g,'＆');
            return text;
        }
        function decode(text){
            text=text.replace(/≺/g,'<');
            text=text.replace(/≻/g,'>');
            text=text.replace(/＆/g,'&');
            return text;
        }
        function state(targetParam){
            document.getElementById("b"+targetParam).innerHTML="Save";
            if(editp===false){
                var content=document.getElementById("an"+targetParam).innerText||document.getElementById("an"+targetParam).textContent;
                content=decode(content);
                //var content=document.getElementById("anta"+targetParam).value;
                if(content==="") content="# ";
                var editor = ace.edit("an"+targetParam);
                var session = editor.session;
                session.setUseWrapMode(true);
                session.setWrapLimitRange(60, 60);
                editor.renderer.setShowGutter(true);
                editor.setTheme("ace/theme/euporia");
                editor.getSession().setMode("ace/mode/xml");
                editor.setOptions({maxLines: 10, fontSize: "9pt", fontFamily: "monospace"});
                editor.autoComplete = false;
                editor.setShowPrintMargin(true);
                editor.setBehavioursEnabled(false);
                editor.resize();
                editor.setValue(content,-1);

                var row = editor.session.getLength() - 1;
                var column = editor.session.getLine(row).length;
                editor.selection.moveTo(row, column);
                editp=true;
            }
        }
        function add(targetParam) {
            if(document.getElementById("b"+targetParam).innerHTML.includes("Saved")){
                return;
            }
            editp=false;
            var editor = ace.edit("an"+targetParam);
            var content=editor.getValue();
            editor.destroy();
            var oldDiv = editor.container;
            var newDiv = oldDiv.cloneNode(false);
            // newDiv.innerText=content;
            oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            target = targetParam;
            document.getElementById("b"+target).innerHTML="Saving...";
            var encodedContent=encode(content);
            var divContent="an"+target+"\n"+encodedContent.replace(/\n/g,"\\n");
            xhttp.open('POST', 'dbmanager.jsp', true);
            xhttp.setRequestHeader("Content-type", "text/html");
            xhttp.send(divContent);

            // Beautify the xml before rewriting it into the div
            $(newDiv).css("white-space", "pre-wrap");
            $(newDiv).text(indentXML(content));
        }
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                document.getElementById("b"+target).innerHTML = xhttp.responseText;
            }
        };

        function indentXML(text) {
            //Remove leading spaces
            var array = text.split(/\n/);
            array[0] = array[0].trim();
            text = array.join("\n");
            //Actual beautify (prettify)
            return vkbeautify.xml(text);
        }
    </script>
</head>
<body>
<script src="js/jquery-2.0.3.min.js"></script>
<script src="./js/ace/ace.js" type="text/javascript" charset="utf-8"></script>
<script src="./js/ace/mode-xml.js" type="text/javascript" charset="utf-8"></script>
<script src="./js/ace/theme-euporia.js" type="text/javascript" charset="utf-8"></script>
<form id="logoutform" method="link" action="logout.jsp"><b>User:</b> ${pageContext.request.remoteUser} [<a href="javascript:{}" onclick="document.getElementById('logoutform').submit(); return false;">logout</a>]
</form>
<div style="overflow:hidden; resize:none">
    <p>
        <b><i>Cartolina</i></b> <select onchange="window.location = 'index.jsp?object_id=' + this.value">
        <c:forEach var="row" items="${objects.rows}">
            <option value="${row.object_id}" <c:if test="${object_id eq row.object_id}">selected="true"<c:set var="work" value="${row.object_id}"/></c:if>>${row.object_id}</option>
        </c:forEach>
    </select>
    </p>
</div>
<div>
    ${rs.rows[0].descrizione}: ${rs.rows[0].soggetto}
    <table style="width:100%;table-layout: fixed;">
        <colgroup>
            <col span="1" style="width:40%;"/>
            <col span="1" style="width:60%;"/>
        </colgroup>
        <thead>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        </thead>
        <tbody>
        <tr>
            <td colspan="2" class="header">
                <br/>
                <div style="overflow-x:hidden; overflow-y:auto;" spellcheck="false" contentEditable="false" id="an${rs.rows[0].part_id}" onclick="state('${rs.rows[0].part_id}')"><pre><code>${rs.rows[0].annotation_content}</code></pre></div>
                <button id="b${rs.rows[0].part_id}" onClick="add('${rs.rows[0].part_id}')">Saved</button>
            </td>
        </tr>
        <tr>
            <td class="text">
                <a href="/euporiaCartoline/cartoline/images/${rs.rows[1].content}" target="_blank"><img src="/euporiaCartoline/cartoline/images/${rs.rows[1].content}" alt="${rs.rows[1].content}" width="300"></a>
            </td>
            <td class="anno">
                <br/>
                <div style="overflow-x:hidden; overflow-y:auto;" spellcheck="false" contentEditable="false" id="an${rs.rows[1].part_id}" onclick="state('${rs.rows[1].part_id}')"><pre><code>${rs.rows[1].annotation_content}</code></pre></div>
                <button id="b${rs.rows[1].part_id}" onClick="add('${rs.rows[1].part_id}')">Saved</button>
            </td>
        </tr>
        <tr>
            <td class="text">
                <a href="/euporiaCartoline/cartoline/images/${rs.rows[2].content}" target="_blank"><img src="/euporiaCartoline/cartoline/images/${rs.rows[2].content}" alt="${rs.rows[2].content}" width="300"></a>
            </td>
            <td class="anno">
                <br/>
                <div style="overflow-x:hidden; overflow-y:auto;" spellcheck="false" contentEditable="false" id="an${rs.rows[2].part_id}" onclick="state('${rs.rows[2].part_id}')"><pre><code>${rs.rows[2].annotation_content}</code></pre></div>
                <button id="b${rs.rows[2].part_id}" onClick="add('${rs.rows[2].part_id}')">Saved</button>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
