import React from "react"
import  ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import ErrorBoundary from "./Errors/ErrorBoundary"
import {AppProvider} from "./context/context"
ReactDOM.render(
     <AppProvider>
	<ErrorBoundary>
	<App />
	</ErrorBoundary>
    </AppProvider>
	,document.getElementById("root")
)
