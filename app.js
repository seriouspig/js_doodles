document.addEventListener('DOMContentLoaded', () => {

    class Character {
        constructor(name, type, strength, health) {
            this.name = name
            this.type = type
            this.strength = strength
            this.health = health
        }
    }
    
    let knight = new Character("Sir Lancelot", "Knight", 50, 100)
    
    var name1 = document.getElementById('name1')
    var type1 = document.getElementById('type1')
    var strength1 = document.getElementById('strength1')
    var health1 = document.getElementById('health1')
    name1.textContent = knight.name
    type1.textContent = knight.type
    strength1.textContent = knight.strength
    health1.textContent = knight.health

    var button = document.getElementById('changeFace')
    button.onclick = function() {
        document.getElementById("face").src="images/face2.jpg";
    }
    

})

