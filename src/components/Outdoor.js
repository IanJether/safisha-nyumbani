




const Outdoor = () => {
    return ( 
        <div className="outdoor">
            <div><p>Clean your garden,windows,pool and Car</p></div>
            <div className="howlong">
                <div><h3>How Long</h3></div>
                <div><p>Select enough hours for your sweepstar to complete all tasks</p></div>
                <div className="howlongbuttons">
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                </div>
            </div>
            <div className="odtasks">
                <div><h3>Select Tasks</h3></div>
                <div><p>What would you like your Sweepstar to do</p></div>
                <div className="odbuttons">
                    <div>Gardening</div>
                    <div>General Cleaning</div>
                    <div>Outside Windows</div>
                    <div>Car washing</div>
                    <div id="lastextra">Pool Cleaning</div>
                </div>
            </div>
        </div>
     );
}
 
export default Outdoor;