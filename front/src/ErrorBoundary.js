import React from "react";
export default class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError() { return { hasError: true }; }
    componentDidCatch(err, info) { console.error(err, info); }
    render() {
        if (this.state.hasError) {
            return <div style={{padding:24,textAlign:'center'}}>Что-то пошло не так. Обновите страницу.</div>;
        }
        return this.props.children;
    }
}