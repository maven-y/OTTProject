A custom video player application built for Tizen (Samsung's operating system for smart TVs and other devices). 

<img width="749" alt="Screenshot 2025-03-26 at 1 10 51 AM" src="https://github.com/user-attachments/assets/13b64b2a-4f53-4b5a-b980-c8b24ea48ebd" />



Here's a summary of what the code does:

### HTML Structure (index.html):
Creates a video player container with a video element

Includes custom controls for:
1. Play/Pause
2. Rewind
3. Fast Forward
4. Seek bar (progress bar)
5. Volume control
6. Mute toggle
#
Uses a sample video URL (Big Buck Bunny)
#
#### Has a clean, dark-themed UI with custom styling
#
### JavaScript Functionality (main.js):
Implements all video player controls

### Features include:
1. Play/Pause toggle with icon changes
2. Seek bar that updates with video progress
3. 5-second rewind and fast forward
4. Volume control with mute toggle

### Remote control support with keyboard events:
1. Enter/OK: Play/Pause
2. Left/Right arrows: Rewind/Fast Forward
3. Up/Down arrows: Volume control


### Project Structure:
Has separate directories for:
1. css/: Stylesheets
2. js/: JavaScript files
3. images/: Image assets

### Includes configuration files for Tizen:
1. config.xml
2. .tproject
3. .project

The application is designed to work on Tizen devices, particularly smart TVs, with both touch and remote control support. 

It provides a custom video player interface with standard video playback controls and a responsive design.
