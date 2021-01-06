import React from 'react';

const CreateBankAc = () => {
    return (
        <div className="creat-bank__account__card">
            <form action="">
                <div className="form-control">
                    <label htmlFor="bank__name">Bank Name</label>
                    <input type="text" name="bankName" id="bankName" placeholder="Bank Name" />
                </div>
                <div className="form-control">
                    <label htmlFor="bank__name">Account Name</label>
                    <input type="text" name="acName" id="acName" placeholder="Bank Name" />
                </div>
                <div className="form-control">
                    <label htmlFor="bank__name">Account No</label>
                    <input type="text" name="acNo" id="acNo" placeholder="Bank Name" />
                </div>
                <div className="form-control">
                    <label htmlFor="bank__name">Account Remark</label>
                    <textarea type="text" name="acNo" id="acNo" placeholder="Bank Name" rows="4"></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="bank__name">Bank Logo</label>
                    <input type="text" name="bankLogo" id="bankLogo" placeholder="Bank Name" />
                </div>
                <div className="form-control">
                    <label htmlFor="bank__name">My QR-Code</label>
                    <input type="text" name="qrcode" id="qrcode" placeholder="Bank Name" />
                </div>
                <div className="form-submit">
                    <button className="btn__cancel">Cancel</button>
                    <button className="btn__submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBankAc;
