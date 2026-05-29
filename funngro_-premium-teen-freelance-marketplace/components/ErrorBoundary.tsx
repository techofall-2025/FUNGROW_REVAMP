"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("❌ [UNHANDLED EXCEPTION IN BOUNDARY]:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="bg-zinc-900 border border-red-500/20 max-w-lg p-8 rounded-3xl relative z-10 shadow-2xl flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-2">
                Something went wrong in the workspace.
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                An unexpected execution event has occurred. Our developers have been alerted. You can click retry to reboot the application segment safely.
              </p>
            </div>

            {this.state.error && (
              <pre className="w-full text-left bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs font-mono text-red-400 overflow-x-auto max-h-40 max-w-full">
                {this.state.error.toString()}
              </pre>
            )}

            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 bg-brand-green text-zinc-950 font-semibold font-sans px-6 py-3 rounded-xl hover:bg-brand-green-hover hover:scale-105 active:scale-95 transition-all w-full md:w-auto justify-center"
            >
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              Reboot App Segment
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
