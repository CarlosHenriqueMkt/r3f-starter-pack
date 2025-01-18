import PropTypes from "prop-types";
import "./layout.css";

export default function Layout({ children }) {
	return <main className="layout-container">{children}</main>;
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
