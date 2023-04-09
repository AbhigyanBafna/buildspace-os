# buildspace os

## Setup
### You don't need to write any code or know how to code to set this up. It will take 2 mins max — promise

**We put together 2 min video of all the steps — [click here to check it out](https://www.loom.com/share/8fa37295dc6d47fd945b348dab52fda1)**

### 1. Download
Click the green "Code" button and select "Download ZIP". Make sure to save it in a safe spot!<br>
![](https://i.imgur.com/TlzzORw.png)

### 2. Turn on Developer mode
In your browser head to the "Extensions" section. This can be found in the settings portion of your browser! Checkout the screenshot below:<br>
![](https://i.imgur.com/igEIfnt.png)

Once you get there you'll see "Developer mode" in the top right. Make sure to toggle that **on** and then you'll see new options (we're gonna be using "Load unpacked")<br>
![](https://i.imgur.com/l8GLD4b.png)

### 3. Add the app to your browser
You're at the home stretch! Press the "Load unpacked" option and then go to the folder where you saved buildspace os. It should look something like this:<br>
![](https://i.imgur.com/ztCAc8i.png)

Once you select it you should see this (nice you did it!)<br>
![](https://i.imgur.com/VmpDMFq.png)

### 4. Open a new tab
Now you can see this thing in action! Open a new tab and you'll notice that there is a prompt saying that the page was changed by the buildspace os extension. **Make sure to select keep it or it will not work.**<br>
![](https://i.imgur.com/UtvBBmW.png)

### 5. Set Color & House Name (skip if you are alterok)
Now, this would require a teeny bit of coding but dw, it's super easy. Head over to the `buildspace-os-main` folder. Open `tab_override.html` in your Code-editor or Notepad. Scroll down till you see the code below. Set your House Color and House Name and you are good to go! <br>

```
.container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            
            /* Set your House Color below
            spectreseek: #a22b24 , guadmire: #abb818 , erevald: #14843e */
            
            background-color: #143099; 
            
            opacity: 0.3; /* Adjust to your liking */
            pointer-events: none;
        }

        .container::after { 
        
            /* Set your House Name below */
            content: "alterok";
            
            padding-bottom: 10%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 5rem;
            color: #ffffff;
            font-family: 'Manrope', 'Poppins', sans-serif; 
            font-weight: 800;
        }
```

<img width="1440" alt="alterok" src="https://user-images.githubusercontent.com/101444239/230771688-bed15037-d2a0-4d3c-af50-483df71119aa.png">

PS - If you don't like quotes simply delete `quotes.js` located in the same folder.

~ Abhigyan Out :) <br>

## Got questions?
For any questions please DM Alec on Discord (alec#8853) or send an email to support@buildspace.so
