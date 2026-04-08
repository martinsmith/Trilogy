<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Car Audio &amp; Vehicle Security installation - Trilogy Incar</title>
    <meta name="keywords" content="car alarm installation, car audio installation, car hifi installation, satellite navigation, anti-hijack installation, fleet management, vechile tracking" />
    <meta name="description" content="We carry out installation of Vehicle Alarms, Dash Cams, most other Vehicle Security and all In Car Entertainment, as well as Sat Nav, Anti-Hijack Systems, Fleet Management and Vehicle Tracking Systems." />

<!-- Main CSS Stylesheets -->
	<link href="/css/style.css" rel="stylesheet" type="text/css" />
	<link href="/css/prettyPhoto.css" rel="stylesheet" type="text/css" media="screen" />

<!--All Javascripts-->
	<script type="text/javascript" src="/javascript/jquery.js" charset="utf-8"></script>
	<script type="text/javascript" src="/javascript/custom.js"></script>
	<script type="text/javascript" src="/javascript/cufon.js"></script>
	<script type="text/javascript" src="/javascript/miso.js"></script>
	<script type="text/javascript" src="/javascript/prettyPhoto.js"></script>

	<!--Script for Contact Form-->
	<script type="text/javascript" src="/javascript/jquery.form.js"></script>
		<script type="text/javascript">
		$(document).ready(function() {
		var options = {
		target:        '#alert',
		beforeSubmit:  showRequest,
		success:       showResponse
		};
		$('#contactForm').ajaxForm(options);
		});
		function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
		return true;
		}
		function showResponse(responseText, statusText)  {
		}
		$.fn.clearForm = function() {
		  return this.each(function() {
			var type = this.type, tag = this.tagName.toLowerCase();
			if (tag == 'form')
			  return $(':input',this).clearForm();
			if (type == 'text' || type == 'password' || tag == 'textarea')
			  this.value = '';
			else if (type == 'checkbox' || type == 'radio')
			  this.checked = false;
			else if (tag == 'select')
			  this.selectedIndex = -1;
		  });
		};
		</script>


</head>
<body>

<!--HEADER STARTS-->
	<?php
	   $path = $_SERVER['DOCUMENT_ROOT'];
	   $path .= "/inc/header.php";
	   include_once($path);
	?>
<!--End #header-->



<!--CONTENT STARTS HERE-->
<div id="content">

		<!--Breadcrumbs start-->
		<div id="breadcrumbs">
			<div class="wrapper">
				<p>You are here: </p>
				<ul>
					<li><a href="/">Home</a></li>
					<li class="current_crumb">Contact</li>
				</ul>
			</div><!-- .breadcrumbs wrapper-->
		</div><!--End #breadcrumbs -->


		<!--MAIN CONTENT AREA-->
        <div id="inner_content">
		<div class="wrapper">

			<h1>Contact Us</h1>
			<div id="main_content">
				<p>Please contact Trilogy using the details provided below. Alternatively you can locate us via the map to the right.</p>

				<!--Contact Details block-->
				<div id="contact">
					<div id="graphic"><img src="/files/support.png" alt="" /></div>
					<div class="column_holder">

						<div class="half">
							<h6>Contact Details</h6>
							<span class="contact_text">(landline) 0161 303 9818<br />(mobile) 07711079779</span>
							<a href="mailto:info@trilogyincar.com">info@trilogyincar.com</a><br />
						</div>

						<div class="half last">
							<h6>Our Premises</h6>
								<span class="contact_text">Trilogy, Unit 1, Peel Street, Stalybridge, SK15 1PT</span>
						</div>

					</div><!--column_holder-->
				</div><!--End #contact-->

			</div><!--End #main_content-->

			<!--SIDEBAR starts-->
			<div id="sidebar">
				<span id="sidebar_top"></span>
				<span id="sidebar_bottom"></span>

				<div class="block">
					<h6>Locate Us</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2suk!4v1469964437183!6m8!1m7!1s8asxj5ajE0Lfv71T6Go17A!2m2!1d53.47983565285111!2d-2.067141769559373!3f67.84360267737284!4f-3.09622484253174!5f0.7820865974627469" width="280" height="350" frameborder="0" style="border:0" allowfullscreen></iframe><br /><small><a href="http://maps.google.co.uk/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=5+Peel+Street,+Stalybridge,+SK15+1SR&amp;aq=&amp;sll=53.479724,-2.065746&amp;sspn=0.00248,0.008256&amp;ie=UTF8&amp;hq=&amp;hnear=Peel+St,+Ashton-under-Lyne,+Tameside+SK15+1,+United+Kingdom&amp;t=h&amp;layer=c&amp;cbll=53.479891,-2.067178&amp;panoid=wkvVsz-BfVo-Vb4tRtXJBw&amp;cbp=13,63.27,,0,16.09&amp;ll=53.474778,-2.067146&amp;spn=0.01788,0.022316&amp;z=14" style="color:#999;text-align:left; font-size:11px">View Larger Map</a></small>

				</div><!--.block-->

					<?php
					   $path = $_SERVER['DOCUMENT_ROOT'];
					   $path .= "/inc/sidebar.php";
					   include_once($path);
					?>
				</div>
			</div><!--End #sidebar-->

        </div><!--.wrapper inner_content-->
		</div><!--End #inner_content-->

</div><!--End #content-->

<!--FOOTER-->
	<?php
	   $path = $_SERVER['DOCUMENT_ROOT'];
	   $path .= "/inc/footer.php";
	   include_once($path);
	?>
<!--End #footer-->

</body>
</html>
