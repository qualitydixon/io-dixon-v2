import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
	<div className="hero" style={{ backgroundImage: 'url(/static/hero.jpg)' }}>
		<div className="headline">
			<h1>Hello.</h1>
			<h1>My name is Mike Dixon.</h1>
			<h1>
				I'm a <span className="headline-alt">Software Engineer</span>.
			</h1>
			<Link to="/page-2/">Go to page 2</Link>
		</div>
	</div>
)

export default IndexPage
