<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>   
 <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><tiles:insertAttribute name="title" /></title>

    <!-- Bootstrap core CSS -->
    <c:url  value="/resources/css/bootstrap.css" var="bootstrap"  />
    <link href="${bootstrap }" rel="stylesheet">

    <!-- Add custom CSS here -->
    <c:url  value="/resources/css/modern-business.css" var="business"  />
    <link href="${business }" rel="stylesheet">
<!-- Theme style -->
<%-- <link href='<c:url value="/resources/css/AdminLTE.css" />' rel="stylesheet" type="text/css" /> --%>
    
</head>

<body>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- You'll want to use a responsive image option so this logo looks good on devices - I recommend using something like retina.js (do a quick Google search for it and you'll find it) -->
                <a class="navbar-brand" href="index">Girnar Technologies</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav navbar-right">
                <c:url value="about" var="about" />
                    <li><a href="${about }">About</a>
                    </li>
                    <c:url value="services" var="services" />
                    <li><a href="${services }">Services</a>
                    </li>
                    <c:url  value="contact" var="contact"/> 
                    <li><a href="${contact}">Contact</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="portfolio-1-col.html">1 Column Portfolio</a>
                            </li>
                            <li><a href="portfolio-2-col.html">2 Column Portfolio</a>
                            </li>
                            <li><a href="portfolio-3-col.html">3 Column Portfolio</a>
                            </li>
                            <li><a href="portfolio-4-col.html">4 Column Portfolio</a>
                            </li>
                            <li><a href="portfolio-item.html">Single Portfolio Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Tutorial <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                        <c:url  value="camerabasic" var="camerabasic" />
                            <li><a href="${camerabasic }">Camera Basic</a>
                            </li>
                            <li><a href="blog-home-2.html">Blog Home 2</a>
                            </li>
                            <li><a href="blog-post.html">Blog Post</a>
                            </li>
                        </ul>
                    </li>
                    <!-- <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other Pages <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="full-width.html">Full Width Page</a>
                            </li>
                            <li><a href="sidebar.html">Sidebar Page</a>
                            </li>
                            <li><a href="faq.html">FAQ</a>
                            </li>
                            <li><a href="404.html">404</a>
                            </li>
                            <li><a href="pricing.html">Pricing Table</a>
                            </li>
                        </ul>
                    </li> -->
                    <c:url  value="login" var="signin"/>
                    <li><a href="${signin}">Sign In</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
<tiles:insertAttribute  name="content"/>
    <div class="container">

        <hr>

        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Company 2013</p>
                </div>
            </div>
        </footer>

    </div>
    <!-- /.container -->

    <!-- JavaScript -->
    <c:url  value="/resources/js/jquery-1.10.2.js" var="jquery" />
    <c:url  value="/resources/js/bootstrap.js" var="bootstrapjs" />
    <c:url  value="/resources/js/modern-business.js" var="businessjs" />
    
    <script src="${ jquery}"></script>
    <script src="${ bootstrapjs}"></script>
    <script src="${businessjs }"></script>

</body>

</html>
