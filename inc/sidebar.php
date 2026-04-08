
				<!--A .block is a list of links-->
				<div class="block">
					<h6>Subpage Navigation</h6>
					<ul>
						<li><a href="/car-audio-and-multimedia">Car audio and Multimedia</a></li>
						<li><a href="/vehicle-security-installation">Vehicle Security Installation</a></li>
						<li><a href="/dash-cams-and-vehicle-cctv">Dash Cams and Vehicle CCTV</a></li>
						<li><a href="/sat-nav-installation">Satellite Navigation Installation</a></li>
						<li><a href="/parking-aids">Parking Aids</a></li>
						<li><a href="/fleet-management-and-vehicle-tracking">Fleet Management / Vehicle Tracking</a></li>
						<li><a href="/anti-hijack-key-theft-protection">Anti hijack/ key theft protection</a>
							<ul>
								<li><a href="/anti-hijack-key-theft-protection/ghost-vehicle-protection/">Ghost Vehicle Protection</a></li>
							</ul>
						</li>
						<li><a href="/plant-security-and-tracking">Plant Security and Tracking</a></li>
						<li><a href="/bespoke-services">Bespoke Services</a></li>
					</ul>
				</div><!--.block-->

				<!--A .block_info may be a combination of Text, Images and Links-->
				<div class="block_info">
					<h6>Authorised Dealer</h6>
					<p><img src="/files/notepad.png" alt="" />Trilogy is an authorised dealer for: Clifford, Parrot, Laser Line and SmarTrack.</p>
                    <img src="/files/clifford-the-science-of-security.gif" alt="Clifford - The Science of Security" /><img src="/files/laser-line.gif" alt="Laser Line" /><img src="/files/parrot-move-wireless.gif" alt="Parrot - move wireless" /><img src="/files/smartrack-stolen-vehicle-recovery-systems.gif" alt="SmarTrack - Stolen Vehicle Recovery Systems" />
				</div><!--.block_info-->

				<!--A .block_posts is a linked list with images and extra info-->
				<div class="block_posts">
					<h6>Latest Portfolio Additions</h6>
					<?php
					   $path = $_SERVER['DOCUMENT_ROOT'];
					   $path .= "/inc/portfolio.php";
					   include_once($path);
					?>
				</div><!--.block_posts-->
