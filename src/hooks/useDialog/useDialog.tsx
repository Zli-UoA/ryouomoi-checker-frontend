import React, { useState } from 'react';
import './useDialog.css';
import '../../common.css';

type VoidFunction = () => void;
type ReasonId = 1 | 2 | 3 | 4 | 5 | 6;

type DialogProps = {
  hakyokuMonths: number,
  reasonId: ReasonId,
  arrowShare: boolean,
};

type UseDialog = () => {
  Dialog: React.VFC<DialogProps>,
  openDialog: VoidFunction,
  closeDialog: VoidFunction,
};

const useDialog: UseDialog = () => {
  const [isOpen, setOpen] = useState(false);

  const openDialog: VoidFunction = () => {
    setOpen(true);
  };

  const closeDialog: VoidFunction = () => {
    setOpen(false);
  };

  const deleteLover = (reasonId: ReasonId, arrowShare: boolean): void => {
    const token = localStorage.getItem('ryouomoi-checker-token');
    fetch('http://localhost:8080/me/lover', {
      method: 'DELETE',
      body: JSON.stringify({ reasonId, arrowShare }),
      headers: new Headers({ Authorization: `Bearer ${token}` }),
    });
  };

  const Dialog: React.VFC<DialogProps> = ({ reasonId, arrowShare }) => {
    if (!isOpen) return null;

    return (
      <div className="dialog__overlay" role="button" tabIndex={0} onClick={closeDialog}>
        <div className="dialog__content" role="button" tabIndex={0} onClick={(e) => e.stopPropagation()}>
          <div className="mg_top-40">
            <div className="dialog__caption">
              <p>
                本当に
                <span className="color_secondarySolid">
                  破局
                </span>
                したんですか？
              </p>
            </div>
          </div>

          <div className="dialog__caution">
            <p>
              「はい」を選択すると両想いチェッカーは
              <br />
              一ヶ月間利用できなくなります。
            </p>
          </div>

          <div className="mg_top-48 mg_bottom-24">
            <div className="dialog__buttonGroup">
              <button type="button" onClick={closeDialog}>
                いいえ
              </button>
              <button type="button" onClick={() => { deleteLover(reasonId, arrowShare); closeDialog(); }}>
                はい
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return {
    Dialog,
    openDialog,
    closeDialog,
  };
};

export default useDialog;
