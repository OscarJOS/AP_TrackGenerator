// AWS Regions data
const awsRegions = {
    americas: [
        { code: 'us-east-1', name: 'US East (N. Virginia)' },
        { code: 'us-east-2', name: 'US East (Ohio)' },
        { code: 'us-west-1', name: 'US West (N. California)' },
        { code: 'us-west-2', name: 'US West (Oregon)' },
        { code: 'ca-central-1', name: 'Canada (Central)' },
        { code: 'ca-west-1', name: 'Canada (Calgary)' },
        { code: 'sa-east-1', name: 'South America (São Paulo)' }
    ],
    europe: [
        { code: 'eu-central-1', name: 'Europe (Frankfurt)' },
        { code: 'eu-west-1', name: 'Europe (Ireland)' },
        { code: 'eu-west-2', name: 'Europe (London)' },
        { code: 'eu-west-3', name: 'Europe (Paris)' },
        { code: 'eu-north-1', name: 'Europe (Stockholm)' },
        { code: 'eu-south-1', name: 'Europe (Milan)' },
        { code: 'eu-central-2', name: 'Europe (Zurich)' }
    ],
    asia: [
        { code: 'ap-east-1', name: 'Asia Pacific (Hong Kong)' },
        { code: 'ap-south-1', name: 'Asia Pacific (Mumbai)' },
        { code: 'ap-south-2', name: 'Asia Pacific (Hyderabad)' },
        { code: 'ap-southeast-1', name: 'Asia Pacific (Singapore)' },
        { code: 'ap-southeast-2', name: 'Asia Pacific (Sydney)' },
        { code: 'ap-southeast-3', name: 'Asia Pacific (Jakarta)' },
        { code: 'ap-southeast-4', name: 'Asia Pacific (Melbourne)' },
        { code: 'ap-northeast-1', name: 'Asia Pacific (Tokyo)' },
        { code: 'ap-northeast-2', name: 'Asia Pacific (Seoul)' },
        { code: 'ap-northeast-3', name: 'Asia Pacific (Osaka)' }
    ]
};

function getRandomRegion(regions) {
    return regions[Math.floor(Math.random() * regions.length)];
}

function generateTrack() {
    // Select random regions
    const americaRegion = getRandomRegion(awsRegions.americas);
    const europeRegion = getRandomRegion(awsRegions.europe);
    const asiaRegion = getRandomRegion(awsRegions.asia);

    // Update UI
    document.getElementById('americaRegion').textContent = americaRegion.name;
    document.getElementById('europeRegion').textContent = europeRegion.name;
    document.getElementById('asiaRegion').textContent = asiaRegion.name;
    document.getElementById('returnRegion').textContent = americaRegion.name;

    // Show the result
    const trackResult = document.getElementById('trackResult');
    trackResult.classList.remove('hidden');

    // Add a subtle animation delay for each step
    const steps = trackResult.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            step.style.transition = 'all 0.3s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Color palette switching
function switchPalette(paletteName) {
    const root = document.documentElement;

    // Remove active class from all buttons
    document.querySelectorAll('.palette-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    document.querySelector(`[data-palette="${paletteName}"]`).classList.add('active');

    // Update CSS variables based on selected palette
    switch(paletteName) {
        case 'aws':
            root.style.setProperty('--primary-color', 'var(--aws-primary)');
            root.style.setProperty('--secondary-color', 'var(--aws-secondary)');
            root.style.setProperty('--background-color', 'var(--aws-background)');
            root.style.setProperty('--gradient-bg', 'var(--aws-gradient)');
            break;
        case 'warm':
            root.style.setProperty('--primary-color', 'var(--warm-primary)');
            root.style.setProperty('--secondary-color', 'var(--warm-secondary)');
            root.style.setProperty('--background-color', 'var(--warm-background)');
            root.style.setProperty('--gradient-bg', 'var(--warm-gradient)');
            break;
        case 'cool':
            root.style.setProperty('--primary-color', 'var(--cool-primary)');
            root.style.setProperty('--secondary-color', 'var(--cool-secondary)');
            root.style.setProperty('--background-color', 'var(--cool-background)');
            root.style.setProperty('--gradient-bg', 'var(--cool-gradient)');
            break;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateBtn').addEventListener('click', generateTrack);

    // Add palette switching event listeners
    document.querySelectorAll('.palette-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const palette = this.getAttribute('data-palette');
            switchPalette(palette);
        });
    });
});