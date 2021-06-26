function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name"
        />
        <br />

        <input
          name="lastName"
          value={this.state.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />
        <br />

        <input
          name="age"
          value={this.state.age}
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>

        <br />

        <select
          value={this.state.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="north pole">North Pole</option>
          <option value="south pole">South Pole</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={this.state.isVegan}
          />{" "}
          Vegan?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={this.state.isKosher}
          />{" "}
          Kosher?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={this.state.isLactoseFree}
          />{" "}
          Lactose Free?
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {this.state.firstName} {this.state.lastName}
      </p>
      <p>Your age: {this.state.age}</p>
      <p>Your gender: {this.state.gender}</p>
      <p>Your destination: {this.state.destination}</p>
      <p>Your dietary restrictions:</p>

      <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
      <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
    </main>
  );
}
