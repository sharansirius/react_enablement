import React, { Component, ReactChild, ReactChildren } from 'react'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props:ErrorBoundaryProps) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error:Error) { 
		return { hasError: true }
	}

	componentDidCatch(error:Error, info:React.ErrorInfo) {
		console.log(error)
		console.log(info)
	}

	render() {
        return (this.state.hasError) ? 'Something went wrong.' : this.props.children	     
	}
}

interface ErrorBoundaryProps {
    children: ReactChild | ReactChildren,
}
interface ErrorBoundaryState {
    hasError: boolean,
}

export default ErrorBoundary