import React, { useState } from 'react';
import DialogButton from './DialogButton';
import './useDialog.css';
import '../../common.css';
import { baseURL } from '../../env';
import fetchWithAuth from '../../lib/fetchWithAuth';
import { Link } from 'react-router-dom';

type VoidFunction = () => void;
type ReasonId = 1 | 2 | 3 | 4 | 5 | 6;

type DialogProps = {
  days: number | undefined,
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
    fetchWithAuth(`${baseURL}/me/lover`, {
      method: 'DELETE',
      body: JSON.stringify({ reasonId, arrowShare }),
    });
  };

  const makeMessage = (days: number | undefined): string => {
    if (days === undefined) return '';
    if (days < 7) {
      return 'え？何かの間違いだよね？';
    }
    if (days < 30) {
      return `${days}日もたってないよ？`;
    }
    if (days < 30 * 6) {
      return '半年持たなかったんですか？';
    }
    if (days < 30 * 12) {
      return `たった${Math.floor(days / 30)}ヶ月で？`;
    }
    return `${Math.floor(days / (30 * 12))}年も付き合っておいて？`;
  };

  const Dialog: React.VFC<DialogProps> = ({ days, reasonId, arrowShare }) => {
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

                <br />
                {makeMessage(days)}
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

          <div className="mg_top-48 mg_bottom-24 mg_left-24 mg_right-24">
            <div className="dialog__buttonGroup">
              <DialogButton label="いいえ" onClick={closeDialog} />
              <Link to="/power-word">
                <DialogButton
                  label="はい"
                  onClick={() => {
                    deleteLover(reasonId, arrowShare);
                    closeDialog();
                  }}
                />
              </Link>
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
