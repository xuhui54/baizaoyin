@echo off
chcp 65001 > nul

:: 使用完整路径直接调用ImageMagick
set "MAGICK=D:\Program Files\ImageMagick-7.1.1-Q16-HDRI\magick.exe"

for /R "e:\demoSpack\other\uniapp\baizaoyin-base\code\images" %%f in (*.svg) do (
    "%MAGICK%" "%%f" -background none -resize 256x256 "%%~dpnf.png"
    echo Converted: %%f
)

echo All conversions completed!
pause