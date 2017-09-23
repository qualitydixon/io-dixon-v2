import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader'

import '../stylesheets/index.scss'

const Header = () => (
	<div>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem'
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					Gatsby
				</Link>
			</h1>
		</div>
	</div>
)

export default class TemplateWrapper extends Component {
	componentDidMount() {
		console.log('Template Wrapper CDM')
		WebFont.load({
			google: {
				families: ['Source Code Pro', 'Merriweather Sans']
			}
		})
	}

	render() {
		const { children } = this.props
		return (
			<div>
				<Helmet
					title="Mike Dixon | Software Engineer"
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' }
					]}
				/>
				<Header />
				<div
					style={{
						margin: '0 auto',
						maxWidth: 960,
						padding: '0px 1.0875rem 1.45rem',
						paddingTop: 0
					}}
				>
					{children()}
				</div>
			</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func
}
