export type Limit = { kind: string; percentUsed: number; resetsAt?: string }

// A prompt waiting to be sent: `dueAt` in epoch ms, `reason` how it was timed.
export type Job = { id: string; text: string; dueAt: number; reason: string }

declare module 'claude-code' {
  interface PluginState {
    'after-reset': {
      jobs: Job[]
    }
  }
}
