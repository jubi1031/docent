/**
 * 아직 콘텐츠가 하나라 모르지만 packages/shared-components로 옮겨질 가능성 농후..
 */
import React, { ReactNode } from 'react';
type ModalProps = {
    children?: ReactNode;
    isVisible?: boolean;
    onClose?: () => void;
    backdrop?: string;
};
declare const Modal: {
    ({ children, isVisible, onClose, backdrop }: ModalProps): JSX.Element;
    Features: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    Details: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
};
export default Modal;
