// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Joanna", "Valeria", "Pineda"
    valentineName: "Joanna",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "To: Joanna V. Pineda",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🙊', '🐻','🦆']                  // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes, I like you",                                             // Text for "Yes" button
            noBtn: "De Vez en Cuando",                                               // Text for "No" button
            secretAnswer: "No baby, te amo!!! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Would you make me the happiest man and be my Valentine❤️", // The big question!
            yesBtn: "YESS!",                                             // Text for "Yes" button
            noBtn: "NOOOO!"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AMORRR!? You love me that much!!?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "HEHEE ay amor thats a lot!! 🚀💝",              // Shows when they go past 1000%
        normal: "Aww baby! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "AUGH IM SO BLESSED TO HAVE YOU! 🎉💖💝💓",
        message: "I you sooo much corazon! \n Now… turn around for a little surprise🌹",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#f8d7da",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#f3c6c9",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#c44569",     // Button color (should stan8e2a3ad out against the background)
        buttonHover: "#d65a7f",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#8e2a3a"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
