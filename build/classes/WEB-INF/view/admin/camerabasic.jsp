   <%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
   
   <c:url value="/admin/camerabasic"  var="action"/>
   <form action="${action }" method="post">
   
   <textarea id="camerabasic" name="camerabasic" rows="10" cols="80">
                                            This is my textarea to be replaced with CKEditor.
                                        </textarea>
   <br>
   <textarea id="camerabasic1" name="camerabasic1" rows="10" cols="80">
                                            This is my textarea to be replaced with CKEditor.
                                        </textarea>
                                        
                                        <input type="submit">
                                        </form>                        