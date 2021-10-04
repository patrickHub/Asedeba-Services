<#macro commonLayout bodyClass="" displayInfo=false displayMessage=true displayWide=false>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" class="">

        <head>
            <meta charset="utf-8">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <!-- Font Awesome -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <!-- Google Fonts -->
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
            <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Gothic+A1:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Saira:wght@400;600;700&display=swap" rel="stylesheet">

            <title>${msg(title)}</title>
            <link rel="icon" href="${url.resourcesUrl}/img/favicon.ico" />
            
            <!-- Booststrap core and custom css -->
            <link href="${url.resourcesUrl}/css/bootstrap.min.css" rel="stylesheet">
            <link href="${url.resourcesUrl}/css/mdb.min.css" rel="stylesheet">
            <link href="${url.resourcesUrl}/css/styles.css" rel="stylesheet">
        </head>

        <body id="global-body" class="main-bg-color">
            <header id="" class="mb-xs-3 mb-sm-5 global-header">
                <!-- Navbar Logo Header -->
                	<#include "./commons/public-logo-header.ftl">
                <!-- Navbar Logo Header -->
                 <!-- Navbar Menu Header -->
                	<#include "./commons/public-menu-header.ftl">
                <!-- Navbar Menu Header -->
            </header>
            
            <!-- Main -->
            <main id="" class="login-main-margin-top global-main">
                <div class="container page--homepage text-center">
                
	                <!-- Card -->
                    <div class="row justify-content-center px-3 hc-main-card">
                        <div class="col-md-7 mb-5 card d-block p-sm-4">
                            <!-- Card body -->
                            <div class="<#if !foss?has_content && !ifu?has_content>card-body pt-3 pb-md-5 px-0 px-sm-4 px-md-4</#if>">
                            
                                <!-- Form -->
                                <#nested "form">
                                <!-- Form -->
                            </div>
                            	
                            <!-- Card body -->
                            	
                        </div>
                    </div>
                    <!-- Card -->
                </div> 
                                                                             
            </main>
            <!-- Main -->

            <!--Footer-->
            <footer class="page-footer unique-color-dark d-none">

            	<#include "./commons/public-footer.ftl">
            
            </footer>
            <!-- Footer -->

           	<!-- Bootstrap core and custom Javascript -->
            <script src="${url.resourcesUrl}/js/jquery.min.js" type="text/javascript"></script>
            <script src="${url.resourcesUrl}/js/popper.min.js" type="text/javascript"></script>
            <script src="${url.resourcesUrl}/js/jquery.validate.min.js" type="text/javascript"></script>
            <script src="${url.resourcesUrl}/js/bootstrap.min.js" type="text/javascript"></script>
            <!--<script src="${url.resourcesUrl}/js/mdb.min.js" type="text/javascript"></script>-->
            <script src="${url.resourcesUrl}/js/app.js" type="module"></script>
            <!-- Bootstrap core and custom Javascript --> 

        </body>
    </html>
</#macro>
