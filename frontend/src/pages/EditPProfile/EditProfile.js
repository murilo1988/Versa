import React from "react";

import "./EditProfile.css";

function EditProfile() {
  const handleSubmit = (e) => {
    e.preventDefaut();
  };
  return (
    <div id='edit_profile'>
      <h2>Edite seus dados</h2>
      <p className='subtitle_profile'>
        Adicione uma imagem de perfil e conte mais sobre você
      </p>
      {/* preview da img */}
      <form className='form_profile' onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='E-mail' disable />
        <label>
          <span>Imagem do Perfil:</span>
          <input type='file' />
        </label>
        <label>
          <span>Bio:</span>
          <input type='text' placeholder='Descrição do perfil.' />
        </label>
        <label>
          <span>Quer alterar a senha:</span>
          <input type='password' placeholder='Digite uma nova senha.' />
        </label>
        <input type='submit' value='Atualizar' />
      </form>
    </div>
  );
}

export default EditProfile;
