@echo off
chcp 65001 >nul
setlocal
title Bat Hermes cho tro choi "Be Hoc Tieng Anh"
cd /d "%~dp0"

echo ========================================================
echo   BAT HERMES CHO TRO CHOI
echo ========================================================
echo.

REM --- tim lenh hermes ---
set "HERMES="
where hermes >nul 2>&1 && set "HERMES=hermes"
if not defined HERMES (
  if exist "%LOCALAPPDATA%\hermes\hermes-agent\venv\Scripts\hermes.exe" (
    set "HERMES=%LOCALAPPDATA%\hermes\hermes-agent\venv\Scripts\hermes.exe"
  )
)
if not defined HERMES (
  echo [LOI] Khong tim thay lenh "hermes".
  echo       Hay cai Hermes Agent truoc, hoac mo Hermes Desktop mot lan.
  echo.
  pause
  exit /b 1
)

REM --- tim python ---
set "PY="
where python >nul 2>&1 && set "PY=python"
if not defined PY ( where py >nul 2>&1 && set "PY=py" )
if not defined PY (
  if exist "%LOCALAPPDATA%\hermes\hermes-agent\venv\Scripts\python.exe" (
    set "PY=%LOCALAPPDATA%\hermes\hermes-agent\venv\Scripts\python.exe"
  )
)
if not defined PY (
  echo [LOI] Khong tim thay Python.
  echo       Hay cai Python 3 tu python.org, nho tick Add to PATH.
  echo.
  pause
  exit /b 1
)

echo [1/3] Dang bat Hermes proxy...
start "Hermes proxy - dung tat cua so nay" "%HERMES%" proxy start
%SystemRoot%\System32\timeout.exe /t 6 /nobreak >nul

echo [2/3] Dang kiem tra Hermes proxy...
%HERMES% proxy status

echo.
echo [3/3] Dang bat cau noi cho tro choi...
echo.
echo ========================================================
echo   SAN SANG! Bay gio mo file tro choi va choi.
echo   GIU CUA SO NAY MO trong khi be choi.
echo   Dong cua so nay = tat AI cua tro choi.
echo ========================================================
echo.

%PY% "%~dp0bridge.py"

echo.
echo Cau noi da tat. Bam phim bat ky de dong.
pause >nul
