function Nav(){
    return(
    <nav class="nav-bar">
		<a href="#" class="nava">liveNext</a>
        
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#feature">Features</a></li>
			<li><a href="#contact">Contact Us</a></li>
			<li class="login"><a href="#login">Login</a>
				<div class="log">
					<a href="">User</a><br/>
					<a href="">Owner</a>
				</div>
			</li>
		</ul>
	</nav>
    )
}
export default Nav