// Configuration
const APPS_SCRIPT_URL = 'YOUR_DEPLOYED_APPS_SCRIPT_URL_HERE'; // TODO: Update after deployment

// State
let observations = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    setupEventListeners();
    checkOnlineStatus();
});

function initializeForm() {
    // Set current date and time
    const now = new Date();
    document.getElementById('patrol-date').valueAsDate = now;
    document.getElementById('patrol-time').value = now.toTimeString().slice(0, 5);

    // Load saved observer name
    const savedObserver = localStorage.getItem('observer');
    if (savedObserver) {
        document.getElementById('observer').value = savedObserver;
    }

    // Add first observation entry
    addObservationEntry();
}

function setupEventListeners() {
    // Location button
    document.getElementById('get-location').addEventListener('click', getCurrentLocation);

    // Add observation button
    document.getElementById('add-observation').addEventListener('click', addObservationEntry);

    // Form submit
    document.getElementById('patrol-form').addEventListener('submit', handleSubmit);

    // Online/offline status
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);
}

// Location handling
function getCurrentLocation() {
    const button = document.getElementById('get-location');
    button.textContent = '📍 Getting location...';
    button.disabled = true;

    if (!navigator.geolocation) {
        showStatus('Geolocation is not supported by your browser', 'error');
        button.textContent = '📍 Get My Location';
        button.disabled = false;
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);

            document.getElementById('latitude').value = lat;
            document.getElementById('longitude').value = lon;
            document.getElementById('lat-display').textContent = lat;
            document.getElementById('lon-display').textContent = lon;
            document.getElementById('location-display').classList.remove('hidden');

            button.textContent = '✅ Location Captured';
            button.disabled = false;

            showStatus('Location captured successfully!', 'success');
            setTimeout(() => hideStatus(), 3000);
        },
        (error) => {
            let message = 'Unable to get location';
            if (error.code === error.PERMISSION_DENIED) {
                message = 'Location permission denied. Please enable location access.';
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                message = 'Location unavailable. Try again.';
            } else if (error.code === error.TIMEOUT) {
                message = 'Location request timed out. Try again.';
            }

            showStatus(message, 'error');
            button.textContent = '📍 Get My Location';
            button.disabled = false;
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function checkOnlineStatus() {
    const offlineNotice = document.getElementById('offline-notice');
    if (!navigator.onLine) {
        offlineNotice.classList.remove('hidden');
    } else {
        offlineNotice.classList.add('hidden');
    }
}

function showStatus(message, type = 'success') {
    const statusEl = document.getElementById('status-message');
    statusEl.textContent = message;
    statusEl.className = `status-message ${type}`;
}

function hideStatus() {
    const statusEl = document.getElementById('status-message');
    statusEl.className = 'status-message hidden';
}

// Placeholder functions (will be implemented in next tasks)
function addObservationEntry() {
    console.log('Add observation - to be implemented');
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('Submit - to be implemented');
}
