import { KubeConfig } from './config.d.ts';
import { Exec } from './exec.d.ts';
export declare class Cp {
    execInstance: Exec;
    constructor(config: KubeConfig, execInstance?: Exec);
    /**
     * @param {string} namespace - The namespace of the pod to exec the command inside.
     * @param {string} podName - The name of the pod to exec the command inside.
     * @param {string} containerName - The name of the container in the pod to exec the command inside.
     * @param {string} srcPath - The source path in the pod
     * @param {string} tgtPath - The target path in local
     * @param {string} [cwd] - The directory that is used as the parent in the pod when downloading
     */
    cpFromPod(namespace: string, podName: string, containerName: string, srcPath: string, tgtPath: string, cwd?: string): Promise<void>;
    /**
     * @param {string} namespace - The namespace of the pod to exec the command inside.
     * @param {string} podName - The name of the pod to exec the command inside.
     * @param {string} containerName - The name of the container in the pod to exec the command inside.
     * @param {string} srcPath - The source path in local
     * @param {string} tgtPath - The target path in the pod
     * @param {string} [cwd] - The directory that is used as the parent in the host when uploading
     */
    cpToPod(namespace: string, podName: string, containerName: string, srcPath: string, tgtPath: string, cwd?: string): Promise<void>;
}
