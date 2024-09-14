// Zmienne gry
let seedsPlanted = false;
let plantsWatered = false;
let plantsFertilized = false;
let pigsFed = false;

let points = 0;
let money = 0;

// Aktualizacja wyświetlania punktów i pieniędzy
function updateStats() {
    document.getElementById('points').textContent = points;
    document.getElementById('money').textContent = money + " zł";
}

// Sadzenie nasion
document.getElementById('plant-seeds').addEventListener('click', function() {
    if (!seedsPlanted) {
        seedsPlanted = true;
        plantsWatered = false; // Reset stanu podlewania
        plantsFertilized = false; // Reset stanu nawożenia
        document.getElementById('vegetable-status').textContent = "Status: Nasiona zasadzone!";
    } else {
        alert('Nasiona już zostały zasadzone!');
    }
});

// Podlewanie roślin
document.getElementById('water-plants').addEventListener('click', function() {
    if (seedsPlanted && !plantsWatered) {
        plantsWatered = true;
        document.getElementById('vegetable-status').textContent = "Status: Rośliny podlane!";
    } else if (!seedsPlanted) {
        alert('Najpierw musisz zasadzić nasiona!');
    } else if (plantsWatered) {
        alert('Rośliny już są podlane!');
    }
});

// Nawóz dla roślin
document.getElementById('fertilize-plants').addEventListener('click', function() {
    if (seedsPlanted && plantsWatered && !plantsFertilized) {
        plantsFertilized = true;
        document.getElementById('vegetable-status').textContent = "Status: Rośliny nawożone!";
    } else if (!seedsPlanted) {
        alert('Najpierw musisz zasadzić nasiona!');
    } else if (!plantsWatered) {
        alert('Najpierw musisz podlać rośliny!');
    } else if (plantsFertilized) {
        alert('Rośliny już zostały nawożone!');
    }
});

// Zbieranie plonów
document.getElementById('harvest-plants').addEventListener('click', function() {
    if (seedsPlanted && plantsWatered && plantsFertilized) {
        points += 10;
        money += 50;
        updateStats();
        // Resetowanie stanu po zbiorach
        seedsPlanted = false;
        plantsWatered = false;
        plantsFertilized = false;
        document.getElementById('vegetable-status').textContent = "Status: Plony zebrane!";
    } else {
        alert('Najpierw musisz zasadzić, podlać i nawozić rośliny!');
    }
});

// Karmienie świń
document.getElementById('feed-pigs').addEventListener('click', function() {
    if (!pigsFed) {
        pigsFed = true;
        document.getElementById('pig-status').textContent = "Status: Świnie nakarmione!";
    } else {
        alert('Świnie już zostały nakarmione!');
    }
});

// Sprzedaż świń
document.getElementById('sell-pigs').addEventListener('click', function() {
    if (pigsFed) {
        points += 5;
        money += 100;
        updateStats();
        // Resetowanie stanu po sprzedaży świń
        pigsFed = false;
        document.getElementById('pig-status').textContent = "Status: Świnie są głodne";
    } else {
        alert('Najpierw musisz nakarmić świnie!');
    }
});

// Resetowanie gry
document.getElementById('reset-game').addEventListener('click', function() {
    points = 0;
    money = 0;
    seedsPlanted = false;
    plantsWatered = false;
    plantsFertilized = false;
    pigsFed = false;
    document.getElementById('vegetable-status').textContent = "Status: Nasiona nie są zasadzone";
    document.getElementById('pig-status').textContent = "Status: Świnie są głodne";
    updateStats();
});
