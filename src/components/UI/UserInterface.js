import React, { useState, useEffect } from 'react';
import './UserInterface.css';

const UserInterface = () => {
  const user1 = 'X',
    user2 = 'O';
  const [userX, setUserX] = useState('');
  const [userO, setUserO] = useState('');
  const [win, setWin] = useState(false);
  const [turn, setTurn] = useState(true);
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [val5, setVal5] = useState('');
  const [val6, setVal6] = useState('');
  const [val7, setVal7] = useState('');
  const [val8, setVal8] = useState('');
  const [val9, setVal9] = useState('');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (
      (val1 === user1 && val2 === user1 && val3 === user1) ||
      (val1 === user1 && val4 === user1 && val7 === user1) ||
      (val1 === user1 && val5 === user1 && val9 === user1) ||
      (val2 === user1 && val5 === user1 && val8 === user1) ||
      (val3 === user1 && val6 === user1 && val9 === user1) ||
      (val3 === user1 && val5 === user1 && val7 === user1) ||
      (val4 === user1 && val5 === user1 && val6 === user1) ||
      (val7 === user1 && val8 === user1 && val9 === user1)
    ) {
      setWinner(userX ? `Winner : ${userX} ` : 'Winner: X');
      setWin(true);
    } else if (
      (val1 === user2 && val2 === user2 && val3 === user2) ||
      (val1 === user2 && val4 === user2 && val7 === user2) ||
      (val1 === user2 && val5 === user2 && val9 === user2) ||
      (val2 === user2 && val5 === user2 && val8 === user2) ||
      (val3 === user2 && val6 === user2 && val9 === user2) ||
      (val3 === user2 && val5 === user2 && val7 === user2) ||
      (val4 === user2 && val5 === user2 && val6 === user2) ||
      (val7 === user2 && val8 === user2 && val9 === user2)
    ) {
      setWinner(userO ? `Winner : ${userO} ` : 'Winner: O');
      setWin(true);
    } else {
      if (
        val1 === '' ||
        val2 === '' ||
        val3 === '' ||
        val4 === '' ||
        val5 === '' ||
        val6 === '' ||
        val7 === '' ||
        val8 === '' ||
        val9 === ''
      ) {
        setWinner('');
      } else {
        setWinner('Draw');
      }
    }
  }, [val1, val2, val3, val4, val5, val6, val7, val8, val9, userX, userO]);

  return (
    <div className='outer'>
      <div className='inputButtons'>
        <div className='input-group mb-3'>
          <div className='input-group-text' id='btnGroupAddon'>
            X
          </div>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Player 1 Name'
            aria-describedby='btnGroupAddon'
            onChange={(e) => {
              e.preventDefault();
              setUserX(e.target.value);
            }}
          />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-text' id='btnGroupAddon'>
            O
          </div>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Player 2 Name'
            aria-describedby='btnGroupAddon'
            onChange={(e) => {
              e.preventDefault();
              setUserO(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='head'>
        <h2 className='title'>Turn: {turn ? user1 : user2}</h2>
        <button
          className='btn btn-success btn-reset'
          onClick={(e) => {
            e.preventDefault();
            setTurn(true);
            setWin(false);
            setWinner('');
            setVal1('');
            setVal2('');
            setVal3('');
            setVal4('');
            setVal5('');
            setVal6('');
            setVal7('');
            setVal8('');
            setVal9('');
          }}
        >
          Restart game
        </button>
      </div>
      <div className='box'>
        <div className='btn-group' role='group'>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val1 === '') {
                if (turn) {
                  setVal1(user1);
                  setTurn(!turn);
                } else {
                  setVal1(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val1}
          </button>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val2 === '') {
                if (turn) {
                  setVal2(user1);
                  setTurn(!turn);
                } else {
                  setVal2(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val2}
          </button>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val3 === '') {
                if (turn) {
                  setVal3(user1);
                  setTurn(!turn);
                } else {
                  setVal3(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val3}
          </button>
        </div>
        <div className='btn-group' role='group'>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val4 === '') {
                if (turn) {
                  setVal4(user1);
                  setTurn(!turn);
                } else {
                  setVal4(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val4}
          </button>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val5 === '') {
                if (turn) {
                  setVal5(user1);
                  setTurn(!turn);
                } else {
                  setVal5(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val5}
          </button>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val6 === '') {
                if (turn) {
                  setVal6(user1);
                  setTurn(!turn);
                } else {
                  setVal6(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val6}
          </button>
        </div>
        <div className='btn-group' role='group'>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val7 === '') {
                if (turn) {
                  setVal7(user1);
                  setTurn(!turn);
                } else {
                  setVal7(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val7}
          </button>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val8 === '') {
                if (turn) {
                  setVal8(user1);
                  setTurn(!turn);
                } else {
                  setVal8(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val8}
          </button>
          <button
            type='button'
            className='btn btn-dark btn-outline-danger button'
            disabled={win}
            onClick={(e) => {
              e.preventDefault();
              if (val9 === '') {
                if (turn) {
                  setVal9(user1);
                  setTurn(!turn);
                } else {
                  setVal9(user2);
                  setTurn(!turn);
                }
              }
            }}
          >
            {val9}
          </button>
        </div>
      </div>
      <div>
        <h3 className='title'>{winner}</h3>
      </div>
    </div>
  );
};

export default UserInterface;
